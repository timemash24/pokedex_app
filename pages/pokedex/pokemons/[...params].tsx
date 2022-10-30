import { GetStaticProps, GetStaticPropsContext } from 'next';
import { useRouter } from 'next/router';
import React from 'react';

const Detail = () => {
  const router = useRouter();
  const params = router.query.params;
  console.log(params);

  return (
    <div>
      <h1>Detail</h1>
      {params ? (
        <p>
          No.{params[1]}:{params[0]}
        </p>
      ) : null}
    </div>
  );
};

export default Detail;
