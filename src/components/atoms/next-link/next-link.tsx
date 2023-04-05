import React, {FC, LinkHTMLAttributes, ReactNode} from "react";

type LinkProps<T> = {
    children: ReactNode;
    linkComponent?: FC<T>;
} & Omit<T, 'className' | 'target' | 'rel'>;

export function NextLink<
    T extends {
        className?: string;
        rel?: string;
        target?: string;
    } = LinkHTMLAttributes<HTMLElement>
>({ children, linkComponent, ...props }: LinkProps<T>) {
    const LinkComponent = linkComponent || 'a';

    return (
        <LinkComponent
            {...(props as any)}
            className="no-underline border-b-4 border-apricot-500 hover:border-black hover:cursor:pointer mr-8 last:mr-0 mb-2 transition-colors duration-150">
            {children}
        </LinkComponent>
    );
}