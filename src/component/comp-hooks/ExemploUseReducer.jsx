import React, { useReducer } from 'react';

const ExemploUseReducer = () => {
  const initialState = { count: 0 };
  const [state, dispatch] = useReducer(reducer, initialState);

  function reducer(state, action) {
    const actions = {
      decrement: () => {
        return { count: state.count - 1 };
      },
      increment: () => {
        return { count: state.count + 1 };
      },
    };
    return {
      default: state,
      ...actions,
    }[action.type || 'default']();
  }

  return (
    <div>
      <button
        type="button"
        style={{ marginRight: '1rem' }}
        onClick={() => dispatch({ type: 'decrement' })}
      >
        +
      </button>
      <button
        type="button"
        style={{ marginRight: '1rem' }}
        onClick={() => dispatch({ type: 'increment' })}
      >
        -
      </button>
      <span>
        <strong>Count:</strong> {state.count}
      </span>
    </div>
  );
};

export default ExemploUseReducer;
