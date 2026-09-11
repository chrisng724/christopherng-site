import Results from "@/components/Results";
import Reviews from "@/components/Reviews";

export const metadata = {
  title: "Results | Chris Ng PREC",
  description:
    "Recent transactions and client reviews for Chris Ng, REALTOR® with Real Broker Ltd. in Metro Vancouver.",
};

export default function ResultsPage() {
  return (
    <main>
      <Results />
      <Reviews />
    </main>
  );
}
