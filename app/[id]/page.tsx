import TitleContents from "@components/title_content/TitleContents";
import { getInvitation } from "lib/invitation";
import { Invitation, Location } from "types/invitation.module";
import { notFound } from "next/navigation";

interface InvitationPageProps {
    params: {
        id: number
    }
}

export default async function InvitationPage({ params }: InvitationPageProps) {
    const id = params.id;

    let invitationInfo: { invitation: Invitation, location: Location };

    try {
        invitationInfo = await getInvitation(id);

        return (
            <div>
                <TitleContents invitation={invitationInfo.invitation} location={invitationInfo.location} />
            </div>
        )
    } catch (e) {
        notFound();
    }
}