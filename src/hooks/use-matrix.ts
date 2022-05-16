import { useState, useMemo, useCallback } from 'react';
export const useMatrix = () => {
    const [matrixName, setMatrixName] = useState<string[][]>([]);
    const matrixFlatten = useMemo(() => {
        return matrixName.flat();
    }, [matrixName]);
    const convertToMatrixName = (row: number, col: number) => {
        const arrName = [];
        for (let i = 0; i < row; i++) {
            const rowName = [];
            for (let j = 0; j < col; j++) {
                rowName.push(`cell_${i}_${j}`);
            }
            arrName.push(rowName);
        }
        setMatrixName(arrName);
    };

    const convertMatrixToArray = (obj: any, row: number, col: number) => {
        const arrName: number[][] = [];
        for (let i = 0; i < row; i++) {
            const rowName = [];
            for (let j = 0; j < col; j++) {
                rowName.push(0);
            }
            arrName.push(rowName);
        }
        Object.keys(obj).forEach((item) => {
            if (item.includes('cell')) {
                const [, rowId, colId]: string[] = item.split('_');
                arrName[parseInt(rowId)][parseInt(colId)] = parseInt(obj[item]);
            }
        });
        return arrName;
    };
    const generateFullMatrix = (
        fullNumber: number,
        row: number,
        col: number
    ) => {
        const arrName: number[][] = [];
        for (let i = 0; i < row; i++) {
            const rowName = [];
            for (let j = 0; j < col; j++) {
                rowName.push(fullNumber);
            }
            arrName.push(rowName);
        }
        return arrName;
    };
    return {
        convertToMatrixName,
        matrixName,
        matrixFlatten,
        convertMatrixToArray,
        generateFullMatrix,
    };
};
