import React from 'react';

const Counter = ({
    onIncrementValue,
    onDecrementValue,
    onRemoveCounter,
    ...counter
}) => {
    const getBageClasses = value => {
        let classes = 'badge text-bg-';
        classes += value > 0 ? 'primary' : 'warning';

        return classes;
    };

    const checkValues = value => {
        return value > 0 ? value : 'empty';
    };

    const handleIncrementValue = () => {
        onIncrementValue(counter._id);
    };

    const handleDecrementValue = () => {
        onDecrementValue(counter._id);
    };

    return (
        <div className="d-flex justify-content-between align-items-center mb-2">
            <span className="w-25">{counter.name}</span>

            <div className="w-25">
                <span className={getBageClasses(counter.value)}>
                    {checkValues(counter.value)}
                </span>
            </div>

            <span className="w-25">{counter.price} $</span>

            <div>
                <button
                    className="btn btn-primary"
                    type="button"
                    onClick={handleIncrementValue}
                >
                    +
                </button>
                <button
                    className="btn btn-primary"
                    type="button"
                    onClick={handleDecrementValue}
                >
                    -
                </button>

                <button
                    className="btn btn-secondary ms-2"
                    type="button"
                    onClick={() => onRemoveCounter(counter._id)}
                >
                    <i className="bi bi-basket2"></i>
                </button>
            </div>
        </div>
    );
};

export default Counter;
