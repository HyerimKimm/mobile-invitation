const sql = require("better-sqlite3");
const db = sql("mobile_invitation.db");

const dummyInvitations = [
  {
    id: 1,
    groom_name: "홍길동",
    bride_name: "홍길순",
    groom_dad_name: "홍길태",
    groom_mom_name: "홍길자",
    bride_dad_name: "홍길용",
    bride_mom_name: "홍길연",
    start_date: "2030-09-12",
    start_time: "13:00:00",
    location_id: 1,
    parking_info: {
      location: "테크노마트 지하주차장 이용 (B3 ~ B7)",
      price: "2시간 무료주차이며, 이후 10분당 1000원이 부과됩니다.",
    },
    subwayInfo: {
      station_name: "신도림역",
      exit_number: 8,
      avail_line: [1, 2],
    },
  },
];

const dummyLocations = [
  {
    id: 1,
    title: "엄청난 웨딩홀 2층 Marcy Hall",
    detail: "서울 양천구 오목로1길 12",
    tel: "02-2222-2222",
  },
];

db.prepare(
  `
    CREATE TABLE IF NOT EXISTS invitations (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        groom_name TEXT,
        bride_name TEXT,
        groom_dad_name TEXT,
        groom_mom_name TEXT,
        bride_dad_name TEXT,
        bride_mom_name TEXT,
        start_date TEXT,
        start_time TEXT,
        location_id INTEGER
    )
`
).run();

db.prepare(
  `
    CREATE TABLE IF NOT EXISTS locations (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT,
        detail TEXT,
        tel TEXT
    )
`
).run();

async function initLocations() {
  const stmt = db.prepare(`
        INSERT INTO locations VALUES (
            null,
            @title,
            @detail, 
            @tel
        )
    `);

  for (const location of dummyLocations) {
    stmt.run(location);
  }
}

async function initInvitations() {
  const stmt = db.prepare(`
        INSERT INTO invitations VALUES (
            null,
            @groom_name,
            @bride_name,
            @groom_dad_name,
            @groom_mom_name,
            @bride_dad_name,
            @bride_mom_name,
            @start_date,
            @start_time,
            @location_id
        )
    `);

  for (const invitation of dummyInvitations) {
    stmt.run(invitation);
  }
}

initLocations();
initInvitations();
