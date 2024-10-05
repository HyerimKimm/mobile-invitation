import TitleContents from "@components/title_content/TitleContents";
import { getInvitation } from "lib/invitation";
import { invitation } from "types/invitation";

interface InvitationPageProps {
    params: {
        id: number
    }
}

export default async function InvitationPage({ params }: InvitationPageProps) {
    const id = params.id;

    const invitationInfo: invitation = await getInvitation(id);

    console.log(id)
    console.log(invitationInfo)

    return <div><TitleContents invitation={invitationInfo}/></div>
}