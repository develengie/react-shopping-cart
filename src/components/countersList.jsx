import React, { useState } from 'react';
import Counter from './counter';

const CountersList = () => {
    const initialState = [
        { _id: 1, name: 'Ненужная вещь', value: 0, price: 11 },
        { _id: 2, name: 'Ложка', value: 0, price: 3.5 },
        { _id: 3, name: 'Вилка', value: 0, price: 1.3 },
        { _id: 4, name: 'Тарелка', value: 0, price: 3 },
        { _id: 5, name: 'Набор минималиста', value: 0, price: 2.6 },
    ];
    const [counters, setCounters] = useState(initialState);

    const handleIncrementValue = counterId => {
        const counterIndex = counters.findIndex(
            counter => counter._id === counterId
        );
        const countersCopy = [...counters];
        countersCopy[counterIndex].value++;
        setCounters(countersCopy);
    };

    const handleDecrementValue = counterId => {
        const counterIndex = counters.findIndex(
            counter => counter._id === counterId
        );
        const countersCopy = [...counters];

        if (countersCopy[counterIndex].value < 1) return;

        countersCopy[counterIndex].value--;
        setCounters(countersCopy);
    };

    const handleRemoveCounter = counterId => {
        setCounters(counters.filter(counter => counter._id !== counterId));
    };

    const getTotalValue = () => {
        let totalValue = 0;
        counters.forEach(counter => (totalValue += counter.value));

        return totalValue;
    };
    const totalValue = getTotalValue();

    const renderPhrase = totalValue => {
        const lastOne = Number(totalValue.toString().slice(-1));

        if (totalValue > 4 && totalValue < 15) return 'товаров';
        if ([2, 3, 4].indexOf(lastOne) >= 0) return 'товара';
        if (lastOne === 1) return 'товар';

        return 'товаров';
    };

    const getTotalPrice = () => {
        let totalPrice = 0;
        counters.forEach(
            counter => (totalPrice += counter.price * counter.value)
        );

        return totalPrice.toFixed(1);
    };
    const totalPrice = getTotalPrice();

    const handleRemoveCountersList = () => {
        setCounters([]);
    };

    const handleRefreshState = () => {
        setCounters(initialState);
    };

    return (
        <div className="container pt-3">
            {counters.map(counter => (
                <Counter
                    key={counter._id}
                    {...counter}
                    onIncrementValue={handleIncrementValue}
                    onDecrementValue={handleDecrementValue}
                    onRemoveCounter={handleRemoveCounter}
                />
            ))}

            <div className="d-flex justify-content-between align-items-center mt-3">
                <div>
                    {totalValue > 0 &&
                        `${totalValue} ${renderPhrase(
                            totalValue
                        )} • ${totalPrice} $`}
                </div>

                <div>
                    <button
                        className="btn btn-primary m-1"
                        type="button"
                        onClick={handleRemoveCountersList}
                    >
                        Очистить
                    </button>
                    <button
                        className="btn btn-primary m-1"
                        type="button"
                        onClick={handleRefreshState}
                    >
                        <i className="bi bi-arrow-clockwise"></i> Обновить
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CountersList;
