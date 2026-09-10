import Results from "@/components/Results";
import Reviews from "@/components/Reviews";

export const metadata = {
  title: "Results | Chris Ng PREC",
};

export default function ResultsPage() {
  return (
    <main>
      <Results />
      <Reviews />
    </main>
  );
}
