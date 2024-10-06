import sql from "better-sqlite3";
import { Invitation } from "types/invitation";
import generateError from "./generateError";

const db = sql("mobile_invitation.db");

export async function getInvitation(id: number): Promise<Invitation | never>{
    await new Promise((resolve)=>setTimeout(resolve, 1000));

    const result : Invitation = db.prepare("SELECT * FROM invitations WHERE id = ?").get(id) as Invitation;

    if(result) {
        return result;
    } else {
       generateError('잘못된 id입니다.', 0)
    }
}