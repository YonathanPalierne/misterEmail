import { storageService } from './async-storage.service.js'
import { loadFromStorage, saveToStorage } from './util.service.js'

export const emailService = {
    query,
    getById,
    remove,
    save,
    createEmail,
    getDefaultFilter
}

const STORAGE_KEY = 'emails'

_createEmails()

async function query(filterBy) {
    let emails = await storageService.query(STORAGE_KEY)

    if (filterBy) {
        let { minBatteryStatus = 0, model = '' } = filterBy

        emails = emails.filter(email =>
            email.model.toLowerCase().includes(model.toLowerCase()) &&
            email.batteryStatus > minBatteryStatus
        )
    }
    return emails
}

function getById(id) {
    return storageService.get(STORAGE_KEY, id)
}

function remove(id) {
    return storageService.remove(STORAGE_KEY, id)
}

function save(emailToSave) {
    if (emailToSave.id) {
        return storageService.put(STORAGE_KEY, emailToSave)
    } else {
        emailToSave.isOn = false
        return storageService.post(STORAGE_KEY, emailToSave)
    }
}

function createEmail(model = '', type = '', batteryStatus = 100) {
    return {
        model,
        type,
        batteryStatus,
    }
}

function getDefaultFilter() {
    return {
        type: '',
        minBatteryStatus: 0,
        maxBattery: '',
        model: ''
    }
}

function _createEmails() {
    let emails = loadFromStorage(STORAGE_KEY)
    if(emails && emails.length > 0) return

    emails = [
        { id: 'r1', model: 'Turbo Plonter', batteryStatus: 100, type: 'Security' },
        { id: 'r2', model: 'Salad-O-Matic', batteryStatus: 80, type: 'Cooking' },
        { id: 'r3', model: 'Dusty', batteryStatus: 100, type: 'Cleaning' },
        { id: 'r4', model: 'DevTron', batteryStatus: 40, type: 'Office' }
    ]
    saveToStorage(STORAGE_KEY, emails)
}

window.rs = emailService            // Easy access from console