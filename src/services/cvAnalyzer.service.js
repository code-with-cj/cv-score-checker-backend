export const analyzeCV = (cvText) => {
  let score = 0;
  const recommendations = [];
  const text = cvText.toLowerCase();

  if (text.includes("@") && /\d{7,}/.test(text)) {
    score += 15;
  } else {
    recommendations.push("Add a clear email address and phone number.");
  }

  if (text.includes("skills")) {
    score += 20;
  } else {
    recommendations.push("Include a skills section with relevant keywords.");
  }

  if (text.includes("experience")) {
    score += 30;
  } else {
    recommendations.push("Add work experience with measurable achievements.");
  }

  if (text.includes("education")) {
    score += 15;
  } else {
    recommendations.push("Add an education section.");
  }

  if (cvText.length > 500) {
    score += 20;
  } else {
    recommendations.push("Expand your CV for better ATS performance.");
  }

  return {
    score: Math.min(score, 100),
    recommendations,
  };
};
