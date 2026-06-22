export default `
<p>MySQL runs a huge share of the world's production applications, and most performance problems people blame on "the database" actually come down to a handful of avoidable mistakes. Here's what matters once a project moves past a toy schema.</p>

<h2>Indexing: the single highest-leverage change</h2>
<p>Without an index, MySQL scans every row in a table to satisfy a query. Add an index on any column you frequently filter or join on:</p>
<pre><code>CREATE INDEX idx_users_email ON users(email);</code></pre>
<p>That said, indexes aren't free — they speed up reads but slow down writes and use disk space. Index the columns your queries actually depend on, not every column you might one day search by.</p>

<h2>Normalization, and when to break it</h2>
<p>Normalized schemas avoid data duplication and keep your data consistent — a user's email lives in exactly one place. But strict normalization can mean expensive joins on read-heavy paths. For high-traffic reporting queries, controlled denormalization, like storing a precomputed total instead of recalculating it from a join every time, is a legitimate trade-off, not a mistake.</p>

<h2>Reading EXPLAIN output</h2>
<p>Before optimizing any slow query, ask MySQL how it intends to run it:</p>
<pre><code>EXPLAIN SELECT * FROM orders WHERE customer_id = 42;</code></pre>
<p>Look at the <code>type</code> column specifically — <code>ALL</code> means a full table scan, which is your signal that an index is missing where you need one.</p>

<h2>Connection pooling</h2>
<p>Opening a new database connection for every request is expensive and won't scale past a small number of concurrent users. Use a connection pool — most frameworks and ORMs (SQLAlchemy, Django's ORM) support this natively — so connections are reused rather than recreated constantly.</p>

<h2>Backups aren't optional</h2>
<p>A production database without automated backups is a question of when, not if, you'll lose data — from a bad migration, a bug, or a hardware failure. At minimum: automated daily backups, stored somewhere separate from the database server itself, with the restore process actually tested at least once before you need it for real.</p>

<h2>Avoiding the N+1 query problem</h2>
<p>This is one of the most common silent performance killers: fetching a list of records, then looping over them and running a separate query per item to get related data. A list of 100 orders shouldn't trigger 100 additional queries to fetch each customer — fetch the related data in one join or one batched query instead.</p>

<h2>Practical checklist</h2>
<p>For any production MySQL setup: index your foreign keys and frequently filtered columns, read EXPLAIN before you optimize blindly, use connection pooling, automate and actually test your backups, and watch for N+1 patterns as your application's query count grows. These habits matter more than any single advanced optimization technique.</p>
`;
