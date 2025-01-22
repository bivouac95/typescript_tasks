const course = {
  name: "Java",
  lessons: ["variables", "functions", "conditions"],
};

const isCompleted = (course: { name: string; lessons: string[] }) => {
  return course.lessons.length >= 4;
};
