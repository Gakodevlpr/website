type Props = React.AnchorHTMLAttributes<HTMLAnchorElement>;

export default function NewTabLink({ children, ...props }: Props) {
  return (
    <a target="_blank" rel="noopener noreferrer" {...props}>
      {children}
    </a>
  );
}
