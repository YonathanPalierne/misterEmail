import { storageService } from "./async-storage.service.js"
import {
  loadFromStorage,
  saveToStorage,
  makeId,
  randomBoolean,
  makeLorem,
  makeEmailAddresse,
} from "./util.service.js"

export const emailService = {
  query,
  getById,
  remove,
  save,
  createEmail,
  getDefaultFilter,
}

const STORAGE_KEY = "emails"

const loggedinUser = {
  email: "user@appsus.com",
  fullname: "Mahatma Appsus",
}

_createEmails()

async function query(filterBy) {
  let emails = await storageService.query(STORAGE_KEY)

  if (filterBy) {
    let { status = "inbox", txt = "", isRead = null } = filterBy

    emails = emails.filter(
      email =>
        email.body.toLowerCase().includes(txt.toLowerCase()) &&
        (!isRead || email.isRead == isRead) &&
        ((status == "inbox" && email.to == loggedinUser.email) ||
          (status == "sent" && email.from == loggedinUser.email) ||
          (status == "star" && email.isStarred === true) ||
          (status == "trash" && email.removedAt !== null))
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

function createEmail(model = "", type = "", batteryStatus = 100) {
  return {
    model,
    type,
    batteryStatus,
  }
}

function getDefaultFilter() {
  return {
    status: "inbox",
    txt: "",
    isRead: null,
  }
}

function _createEmails() {
  let emails = loadFromStorage(STORAGE_KEY)
  if (emails && emails.length > 0) return

  emails = []

  for (let i = 0; i < 10; i++) {
    const fake_emails = makeEmailAddresse();
    const tmp = {
      id: makeId(),
      isRead: randomBoolean(),
      isStarred: randomBoolean(),
      removedAt: null,
      sentAt: Date.now(),
      subject: makeLorem(3),
      body: makeLorem(100),
      from: fake_emails[0],
      to: fake_emails[1],
    }

    emails.push(tmp)
  }

  saveToStorage(STORAGE_KEY, emails)
}

// window.rs = emailService // Easy access from console
