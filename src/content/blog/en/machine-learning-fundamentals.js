export default `
<p>Machine learning sounds abstract until you build one model end to end. This guide covers the concepts that actually matter for getting started — and then walks through a real, working example.</p>

<h2>What "learning" actually means here</h2>
<p>A machine learning model doesn't learn the way a person does. It finds a mathematical function that maps inputs to outputs by minimizing error on example data. The "learning" is really an optimization process — adjusting internal parameters until predictions get as close as possible to known correct answers.</p>

<h2>Supervised vs. unsupervised learning</h2>
<p>Almost everything you'll touch as a beginner falls into one of two buckets:</p>
<ul>
  <li><strong>Supervised learning</strong> — you have labeled examples (input + correct answer) and train a model to predict the label for new, unseen inputs. Spam detection and price prediction are classic examples.</li>
  <li><strong>Unsupervised learning</strong> — there are no labels; the model finds structure on its own, like grouping similar customers together (clustering).</li>
</ul>

<h2>The train/test split</h2>
<p>The single most important habit to build early: never evaluate a model on the same data it trained on. Split your dataset so the model never sees the test portion during training:</p>
<pre><code>from sklearn.model_selection import train_test_split

X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)</code></pre>
<p>If you skip this step, your model can look perfect on paper while failing completely on real-world data — a problem called overfitting.</p>

<h2>Building your first model</h2>
<p>Here's a complete, minimal classifier using scikit-learn:</p>
<pre><code>from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score

model = LogisticRegression()
model.fit(X_train, y_train)

predictions = model.predict(X_test)
print("Accuracy:", accuracy_score(y_test, predictions))</code></pre>
<p>Three lines actually train the model: instantiate it, call <code>.fit()</code>, call <code>.predict()</code>. Everything else in machine learning work — feature engineering, tuning, validation — exists to make those three lines produce a model worth trusting.</p>

<h2>Why accuracy alone isn't enough</h2>
<p>If 95% of your data belongs to one class, a model that always predicts that class gets 95% accuracy while being useless. For imbalanced problems, look at precision, recall, and the F1 score instead of accuracy alone.</p>

<h2>From scikit-learn to deep learning</h2>
<p>Classical models like logistic regression and decision trees solve a huge share of real business problems with far less data and compute than deep learning requires. Reach for neural networks — and frameworks like PyTorch or TensorFlow — when you're working with unstructured data: images, audio, or raw text, where deep architectures consistently outperform classical methods.</p>

<h2>Practical next steps</h2>
<p>Pick one small, real dataset — not a toy example you've seen a hundred times — and build a full pipeline: load data, clean it, split it, train a baseline model, evaluate it honestly, and only then try to improve it. That full loop, done once for real, teaches more than reading ten more tutorials.</p>
`;
