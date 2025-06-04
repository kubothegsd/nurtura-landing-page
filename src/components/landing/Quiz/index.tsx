import { QuizPreview } from "./QuizPreview";

export const Quiz = () => {
  return (
    <section
      id="quiz"
      className="w-full bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 py-32 md:py-40 relative overflow-hidden"
    >
      <QuizPreview />
    </section>
  );
};
