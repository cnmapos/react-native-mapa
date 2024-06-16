import { Position, ShapePainter } from '@/types';
import { bbox } from '../../utils/common';

export class RectanglePainter implements ShapePainter {
    private points: Position[] = [];
    private historyStask: Position[][] = [];

    onChange?: ((points: Position[]) => void) | undefined;
    undo(): void {
        if (this.historyStask.length > 0) {
            this.historyStask.pop()!;
            this.points = this.historyStask.at(-1) || [];
            this.onChange?.(this.points);
        }
    }
    addPoint(position: Position): void {
        if (this.points.length > 1) {
            this.points.splice(this.points.length - 1, 1, position);
        } else {
            this.points.push(position);
        }
        this.historyStask.push([...this.points]);
        this.onChange?.(this.points);
    }
    getData() {
        if (this.points.length !== 2) {
            return false;
        }
        const bounds = bbox(this.points);

        return [bounds[0], bounds[1]];
    }
}
