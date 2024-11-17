import TitleContents from "@components/title_content/TitleContents";
import { getInvitation } from "@firebase/invitation";
import { Invitation, Location } from "types/invitation.module";
import { notFound } from "next/navigation";

interface InvitationPageProps {
  params: {
    id: string;
  };
}

export default async function InvitationPage({ params }: InvitationPageProps) {
  const id = params.id;

  let invitationInfo: { invitation: Invitation; location: Location };

  try {
    invitationInfo = await getInvitation(id);

    return (
      <main>
        <TitleContents
          invitation={invitationInfo.invitation}
          location={invitationInfo.location}
        />
      </main>
    );
  } catch (e) {
    notFound();
  }
}
