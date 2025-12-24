import ProposalFlow from "@/components/ProposalFlow";
import HeartBackground from "@/components/HeartBackground";
import PasswordGate from "@/components/PasswordGate";

export default function Home() {
  return (
    <PasswordGate>
      <main>
        <HeartBackground />
        <ProposalFlow />
      </main>
    </PasswordGate>
  );
}
