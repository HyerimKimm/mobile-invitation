import sql from "better-sqlite3";
import { Invitation, Location } from "types/invitation.module";
import generateError from "./generateError";

const db = sql("./sqlite/mobile_invitation.db");

export async function getInvitation(
  id: number
): Promise<{ invitation: Invitation; location: Location }> {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const invitationData = db
    .prepare(`SELECT  * FROM invitations WHERE id = ? `)
    .get(id) as Invitation;

  const locationData = db
    .prepare(`SELECT * FROM locations WHERE id = ?`)
    .get(invitationData.location_id) as Location;

  if (invitationData && locationData) {
    return {
      invitation: invitationData,
      location: locationData,
    };
  } else {
    generateError("잘못된 id입니다.", 404);
  }
}
