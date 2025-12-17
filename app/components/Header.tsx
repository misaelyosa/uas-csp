import Link from "next/link";

type Props = {
  username?: string;
};

export default function Header({ username }: Props) {
  return (
    <header className="w-full border-b bg-white/50 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4">
        <div className="text-xl font-semibold">ProfileApp</div>
        <div className="flex items-center gap-4">
          <span className="hidden sm:inline text-sm text-zinc-600">
            {username ? `Hi @${username}` : "Hi @user"}
          </span>
          <Link
            href="/profile"
            className="rounded-md bg-blue-600 px-3 py-2 text-sm text-white hover:bg-blue-700"
          >
            Profile
          </Link>
        </div>
      </nav>
    </header>
  );
}
