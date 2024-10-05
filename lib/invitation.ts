import sql from "better-sqlite3";
import { invitation } from "types/invitation";

const db = sql("mobile_invitation.db");

export async function getInvitation(id: number){
    await new Promise((resolve)=>setTimeout(resolve, 1000));

    return db.prepare("SELECT * FROM invitations WHERE id = ?").get(id);
}