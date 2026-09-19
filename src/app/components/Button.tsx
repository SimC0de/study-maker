//@ts-expect-error arguments expecting any
export default function Button({ onClick, children, ...props }) {
    return <button className={`rounded-4xl bg-stone-700 p-3 font-bold`} onClick={onClick}>
      {children}
  </button>;
}
