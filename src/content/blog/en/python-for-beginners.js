export default `
<p>Python has earned its reputation as the best first programming language for a simple reason: its syntax reads almost like plain English, while still being powerful enough to run production systems at companies like Google, Instagram, and Spotify. This guide walks through everything you need to write your first real script.</p>

<h2>Why start with Python</h2>
<p>Before touching a single line of code, it helps to know why Python specifically. Three reasons stand out for beginners:</p>
<ul>
  <li><strong>Readable syntax</strong> — no semicolons, no curly braces, indentation does the structural work.</li>
  <li><strong>One language, many domains</strong> — the same fundamentals carry over to web backends, automation, data analysis, and AI.</li>
  <li><strong>A massive ecosystem</strong> — almost any problem you'll hit has a library already solving it.</li>
</ul>

<h2>Setting up your environment</h2>
<p>Install Python 3.11 or newer from the official source, then verify the install from your terminal:</p>
<pre><code>python3 --version</code></pre>
<p>For your editor, VS Code with the Python extension is the most common beginner setup — it gives you syntax highlighting, autocomplete, and an integrated terminal in one place.</p>

<h2>Variables and basic types</h2>
<p>Python infers types automatically, so you don't declare them upfront:</p>
<pre><code>name = "Sanjar"
age = 24
is_developer = True
skills = ["Python", "AI", "Telegram bots"]</code></pre>
<p>Four types will cover almost everything early on: strings, integers/floats, booleans, and lists.</p>

<h2>Control flow: conditions and loops</h2>
<pre><code>if age >= 18:
    print("You can vote")
else:
    print("Not yet eligible")

for skill in skills:
    print(f"Learning: {skill}")</code></pre>
<p>Notice the colon and the indentation — that indentation isn't a style choice, it's how Python knows what belongs inside the block.</p>

<h2>Functions: your first reusable building block</h2>
<pre><code>def greet(name):
    return f"Hello, {name}!"

print(greet("Sanjar"))</code></pre>
<p>A function takes input, does something with it, and (usually) returns a result. Once you're comfortable writing small functions, you're already thinking like a programmer.</p>

<h2>A first real script</h2>
<p>Here's a tiny program that ties the basics together — a number guessing game:</p>
<pre><code>import random

target = random.randint(1, 100)
attempts = 0

while True:
    guess = int(input("Guess a number (1-100): "))
    attempts += 1
    if guess == target:
        print(f"Correct! It took you {attempts} attempts.")
        break
    elif guess < target:
        print("Too low.")
    else:
        print("Too high.")</code></pre>

<h2>Where to go next</h2>
<p>Once these fundamentals feel comfortable, the next steps are: writing small command-line tools, learning how to read error tracebacks without panicking, and picking one direction — web development with FastAPI or Django, automation scripting, or data work with pandas. Depth in one direction will teach you more than breadth across all of them at once.</p>

<h2>Final thoughts</h2>
<p>The biggest jump in skill doesn't come from reading more — it comes from writing more code that breaks, and fixing it. Type out every example here yourself rather than copy-pasting, and build something small and useless before you try to build something big and useful.</p>
`;
