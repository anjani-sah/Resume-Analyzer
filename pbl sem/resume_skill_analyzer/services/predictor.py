from functools import lru_cache

from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.linear_model import LogisticRegression
from sklearn.pipeline import Pipeline

from ..data.training_data import generate_training_samples


class CareerDomainPredictor:
    def __init__(self) -> None:
        samples = generate_training_samples()
        texts = [text for text, _ in samples]
        labels = [label for _, label in samples]

        self.pipeline = Pipeline(
            steps=[
                ("tfidf", TfidfVectorizer(ngram_range=(1, 2))),
                ("classifier", LogisticRegression(max_iter=1000)),
            ]
        )
        self.pipeline.fit(texts, labels)

    def predict(self, analysis_text: str) -> dict:
        probabilities = self.pipeline.predict_proba([analysis_text])[0]
        classes = self.pipeline.classes_
        confidence_map = {
            domain: round(float(score) * 100, 1) for domain, score in zip(classes, probabilities)
        }
        predicted_domain = max(confidence_map, key=confidence_map.get)

        ranked = sorted(confidence_map.items(), key=lambda item: item[1], reverse=True)
        return {
            "domain": predicted_domain,
            "confidence": confidence_map[predicted_domain],
            "ranked_scores": ranked,
        }


@lru_cache(maxsize=1)
def get_predictor() -> CareerDomainPredictor:
    return CareerDomainPredictor()