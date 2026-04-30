import { useCounterStore } from "../store/counterStore";
import { Button } from "./ui/button";

function Counter() {
  const count = useCounterStore((state) => state.count);
  const increment = useCounterStore((state) => state.increment);
  const decrement = useCounterStore((state) => state.decrement);
  const reset = useCounterStore((state) => state.reset);

  return (
    <div>
      <h2>Contador: {count}</h2>
      <Button variant="default" onClick={increment}>
        Incrementar
      </Button>
      <Button variant="outline" onClick={decrement}>
        Reducir
      </Button>
      <Button variant="secondary" onClick={reset}>
        Reiniciar Contador
      </Button>
    </div>
  );
}

export default Counter;
