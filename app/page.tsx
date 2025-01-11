import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main
    className={styles.main}
    >

      <section
        className={styles.hero}
      >
        <div
          className={styles.heroContent}
        >
          <h1 className={styles.tit}>당신이 마는 차를 기록해 보세요.</h1>
          <p>
            이번 달에 나는 어떤 차를 마셨다라? 궁금하거나<br/>
            나는 어떤 맛을 느꼈지? 천천히 알아가고 싶다면.
          </p>

        <div
          className={styles.heroImages}
        >
          <div
            className={styles.heroImageContainer}
          >
            <Image 
              src="/images/main.png"
              alt="대표 앱 이미지"
              fill
              sizes="(max-width : 350px)"
              objectFit="contain"
              priority
            />
          </div>
          <div
            className={styles.heroImageContainer}
          >
            <Image 
              src="/images/main.png"
              alt="대표 앱 이미지"
              fill
              sizes="(max-width : 350px)"
              objectFit="contain"
              priority
            />
          </div>
        </div>
          
        </div>
      </section>

      {/* feature */}
      <section
        className={styles.features}
      >
        <h2>주요 기능</h2>
        <div
          className={styles.featureGrid}
        >
          <article
            className={styles.featureCard}
          >
            <h3>주간/월간 달력</h3>
            <p>편리하게 원하는 날짜에 기록을 정리할 수 있다.</p>
          </article>
          <article
            className={styles.featureCard}
          >
            <h3>향미 추가</h3>
            <p>생각나지 않는 향미를 편리하게 추가할 수 있다.</p>
          </article>
          <article
            className={styles.featureCard}
          >
            <h3>빠른 최근 기록 찾기</h3>
            <p>최근 기록한 정보를 메인 페이지서 단번에 찾아갈 수있다.</p>
          </article>
        </div>
      </section>

      {/* screen shot images  */}
      <section
        className={styles.screenshots}
      >
        <h2>주요 화면</h2>

        <div
          className={styles.screenshotImage}
        >
          {
            [1,2,3].map(i => (
              <div
                key={i}
                className={styles.imagedContainer}
              >
                <Image
                  src={`/images/modified${i}.png`}
                  alt={`이미지${i}`}
                  fill
                  sizes="width: 350px"
                  objectFit="contain"
                />
              </div>
            ))
          }

        </div>
      </section>

      <section className={styles.download}>
        <h2>지금 바로 시작하세요</h2>
        <p>iOS와 Android에서 모두 만나보실 수 있습니다</p>
        <div className={styles.downloadButtons}>
          <Link href="#" className={styles.downloadButton}>
          <p>Apple</p>
            {/* <Image
              src="/api/placeholder/200/60"
              alt="App Store에서 다운로드"
              width={200}
              height={60}
            /> */}
          </Link>
          <Link href="#" className={styles.downloadButton}>
          <p>android</p>
            {/* <Image
              src="/api/placeholder/200/60"
              alt="Google Play에서 다운로드"
              width={200}
              height={60}
            /> */}
          </Link>
        </div>
      </section>

    </main>
  );
}
