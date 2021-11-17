type DebounceProps = {
  callback: () => void;
  delay: number;
}

export function Debounce({ callback, delay }: DebounceProps) {
  let timer: NodeJS.Timeout | null;

  return () => {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      callback();
      timer = null;
    }, delay);
  }
}