
export default function SignIn() {
    return (
        <main>
        <h1>Sign In</h1>
        <form>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" required />
            <button type="submit">Sign In</button>
        </form>
        </main>
    );
}