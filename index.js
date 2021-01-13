const avoidDecimalJsFunc(left: Nullable<number>, right: Nullable<number>): number | null => {
        if (right == null || left == null) {
            return null;
        }

        const getParts = (value: number): string[] => value.toString().split(".");
        const getDecimalOrder = (value: string[]): number => (value.length === 2 ? value[1].length : 0);

        const partsLeft = getParts(left);
        const partsRight = getParts(right);

        if (partsLeft.length === 1 && partsRight.length === 1) {
            return left % right;
        }

        const multiplier = 10 ** Math.max(getDecimalOrder(partsLeft), getDecimalOrder(partsRight));

        return (Math.round(left * multiplier) % Math.round(right * multiplier)) / multiplier;
    }
