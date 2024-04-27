import { Position } from '@/types';

export class PolylinePaitner {
    private points: Position[] = [];
    private historyStask: Position[][] = [];

    onChange?: (points: Position[]) => void;

    undo() {
        if (this.historyStask.length > 0) {
            this.historyStask.pop()!;
            this.points = this.historyStask.at(-1) || [];
            this.onChange?.(this.points);
        }
    }

    addPoint(position: Position) {
        this.points.push(position);
        this.historyStask.push([...this.points]);
        this.onChange?.(this.points);
    }

    getData() {
        if (this.points.length < 2) {
            return false;
        }

        return this.points;
    }
}
