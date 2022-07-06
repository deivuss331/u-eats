import { useEffect, useRef } from 'react';
import { useQueryClient } from 'react-query';

const useQueryClientAbort = (reqUrl: string) => {
  const queryClient = useQueryClient();
  const prevReqUrl = useRef<string>(reqUrl);

  useEffect(() => {
    const isNewRequest: boolean = reqUrl !== prevReqUrl.current;

    if (isNewRequest) {
      queryClient.cancelQueries(prevReqUrl.current);
      prevReqUrl.current = reqUrl;
    }
  }, [reqUrl]);
};

export default useQueryClientAbort;
