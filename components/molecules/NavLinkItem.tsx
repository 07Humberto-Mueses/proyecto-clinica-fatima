import Link from 'next/link';
import clsx from 'clsx';

export function NavLinkItem ({ href, icon: Icon, name }: any) {
    return (
        <Link
            href={href}
            className={clsx(
                "flex",
            )}
        >
            <Icon className="w-6"/>
            <span>{name}</span>
        </Link>
    )
}