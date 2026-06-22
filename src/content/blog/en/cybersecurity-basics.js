export default `
<p>Security isn't a separate phase you bolt on after a feature works — it's a property of how you write the feature in the first place. Here are the fundamentals every backend developer should treat as non-negotiable, regardless of language or framework.</p>

<h2>SQL injection: still the most common avoidable bug</h2>
<p>Never build SQL queries by concatenating user input directly into a string. This is the single most common, most avoidable vulnerability in backend code:</p>
<pre><code># Dangerous — never do this
query = f"SELECT * FROM users WHERE email = '{user_input}'"

# Safe — parameterized query
cursor.execute("SELECT * FROM users WHERE email = %s", (user_input,))</code></pre>
<p>Every modern database driver supports parameterized queries. There is no legitimate reason to skip them.</p>

<h2>Cross-Site Scripting (XSS)</h2>
<p>If your application renders user-submitted content back into a page without escaping it, an attacker can inject a script that runs in another user's browser — stealing session cookies, redirecting users, or quietly modifying what they see. Always escape output by default, and treat any templating engine's "raw HTML" option as something to reach for rarely and deliberately, never as the default.</p>

<h2>Password storage</h2>
<p>Never store plaintext passwords, and never use fast general-purpose hashes like MD5 or SHA-256 alone for password storage — they're built for speed, which is exactly the wrong property here. Use a slow, purpose-built algorithm:</p>
<pre><code>from werkzeug.security import generate_password_hash, check_password_hash

hashed = generate_password_hash("user_password")
is_valid = check_password_hash(hashed, "user_password")</code></pre>
<p>Bcrypt, Argon2, and scrypt are designed specifically to be computationally expensive, which is what makes brute-forcing a leaked database impractical.</p>

<h2>Secrets management</h2>
<p>API keys, database credentials, and tokens should never appear in source code or get committed to version control. Use environment variables, load them with a library like <code>python-dotenv</code> in development, and use a proper secrets manager in production. Add <code>.env</code> to <code>.gitignore</code> on day one of every project — not after the first leak.</p>

<h2>Input validation at the boundary</h2>
<p>Validate and sanitize everything coming from outside your system — form fields, query parameters, file uploads, webhook payloads — at the point it enters your application, not deep inside business logic where it's easy to forget a path. Libraries like Pydantic make this close to free in Python:</p>
<pre><code>from pydantic import BaseModel, EmailStr

class UserInput(BaseModel):
    email: EmailStr
    age: int</code></pre>

<h2>Rate limiting and abuse prevention</h2>
<p>Any public endpoint — a login form, a contact form, an API route — needs a rate limit, or it will eventually be hit by automated abuse: credential stuffing, spam submissions, or simple denial-of-service attempts. This applies just as much to a small personal project's contact form as it does to enterprise infrastructure.</p>

<h2>A practical mindset</h2>
<p>You don't need to be a security specialist to avoid the vulnerabilities that account for the overwhelming majority of real-world breaches. Parameterized queries, escaped output, properly hashed passwords, secrets kept out of source control, and validated input at the boundary — these five habits alone eliminate most of what attackers actually exploit.</p>
`;
