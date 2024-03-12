
export default function SignUp() {
    return (
        <main>
        <h1>Sign Up</h1>
        <form>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" required />
            <label htmlFor="password_confirmation">Confirm Password</label>
            <input type="password" id="password_confirmation" name="password_confirmation" required />
            <button type="submit">Sign Up</button>
        </form>
        </main>
    );
}