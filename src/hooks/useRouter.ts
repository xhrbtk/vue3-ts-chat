

import { useRouter } from 'vue-router';
const router = useRouter();

const useJumpTo = (path: string): void => {
    router.push({ path });
};

export default useJumpTo;