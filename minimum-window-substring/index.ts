export default function minWindow(s: string, t: string): string {
    const need = new Map<string, number>();
    for (const c of t) {
        need.set(c, (need.get(c) ?? 0) + 1);
    }

    let l = 0,
        r = 0,
        valid = 0;

    let res = "";

    const window = new Map<string, number>();

    while (r < s.length) {
        const c = s[r];

        if (need.get(c)) {
            // 更新窗口值
            window.set(c, (window.get(c) ?? 0) + 1);

            if (window.get(c) == need.get(c)) valid++;

            // valid 不一定是最短的，需要左指针不断右移
            while (valid === need.size) {
                const cur = s.slice(l, r + 1);
                const len = res.length;
                res = len === 0 || r + 1 - l < len ? cur : res;

                // 找到一个满足条件后，更新左指针直至其指向t中字符
                do {
                    const d = s[l];
                    if (need.get(d)) {
                        if ((window.get(d) ?? 0) == (need.get(d) ?? 0)) {
                            valid--;
                        }
                        window.set(d, (window.get(d) ?? 0) - 1);
                    }
                    l++;
                } while (!need.get(s[l]) && l <= r);
            }
        }

        // 当前区间不存在符合条件的子串时，右指针才更新
        r++;
    }

    return res;
}
