import TitleContents from "@components/title_content/TitleContents";
import { getInvitation } from "lib/invitation";
import { Invitation } from "types/invitation";
import { notFound } from "next/navigation";

interface InvitationPageProps {
    params: {
        id: number
    }
}

export default async function InvitationPage({ params }: InvitationPageProps) {
    const id = params.id;

    let invitationInfo: Invitation | null;


    try {
        invitationInfo = await getInvitation(id);

        return <div><TitleContents invitation={invitationInfo} /></div>
    } catch (e) {
        notFound();
    }
}