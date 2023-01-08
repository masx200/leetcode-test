import { Heap } from "../deps.ts";

export default function getOrder(tasks: number[][]): number[] {
    const tasks_indexed: TaskIndexed[] = tasks.map(
        ([enqueueTime, processingTime], index) => ({
            index,
            processingTime,
            enqueueTime,
        })
    );

    tasks_indexed.sort((a, b) => -a.enqueueTime + b.enqueueTime);

    //console.log(tasks_indexed)
    const ans: number[] = [];
    const pq = new Heap<TaskIndexed>((a, b) =>
        a.processingTime === b.processingTime
            ? +a.index - b.index
            : +a.processingTime - b.processingTime
    );

    let time = 0;

    while (tasks_indexed.length || pq.size()) {
        // console.log(time)
        if (pq.isEmpty()) {
            time = Math.max(
                time,
                tasks_indexed[tasks_indexed.length - 1].enqueueTime
            );
        }

        let last = tasks_indexed[tasks_indexed.length - 1];

        while (last && last.enqueueTime <= time) {
            tasks_indexed.pop();
            pq.insert(last);
            last = tasks_indexed[tasks_indexed.length - 1];
        }

        //console.log("last",last,"time",time,tasks_indexed,pq.toArray())

        //}

        if (pq.size()) {
            //  console.log("time",time,pq.toArray())
            const { index, processingTime } = pq.top();
            pq.pop();

            time += processingTime;
            ans.push(index);
        }
    }

    return ans;
}

type TaskIndexed = {
    index: number;
    processingTime: number;
    enqueueTime: number;
};
