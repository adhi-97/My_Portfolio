import { FaJava } from "react-icons/fa";
import { SiC, SiCplusplus, SiPython, SiMysql, SiPostgresql, SiSqlite,SiSpring,SiDjango, SiTensorflow, SiPytorch, SiSalesforce, SiReact, SiGit,SiLinux,SiDocker,SiRedis } from "react-icons/si";

const TechStack = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h1 className="my-20 text-center text-4xl">Technology Stack</h1>
      <div className="flex flex-col items-center">
        <div className="flex flex-col gap-8">
          <div className="text-center">
            <h2 className="text-xl font-bold">Languages & Scripting</h2>
            <div className="flex justify-center gap-4 m-8">
              <SiC className="rounded-2xl border-4 border-neutral-800 p-4 " style={{ fontSize: '70px' }} />
              <SiCplusplus className="rounded-2xl border-4 border-neutral-800 p-4 " style={{ fontSize: '70px' }} />
              <FaJava className="rounded-2xl border-4 border-neutral-800 p-4 " style={{ fontSize: '70px' }}/>
              <SiPython className="rounded-2xl border-4 border-neutral-800 p-4 " style={{ fontSize: '70px' }}/>
              <span className="rounded-2xl border-4 border-neutral-800 p-4 " style={{ fontSize: '20px' }}>Apex</span>
              <SiMysql className="rounded-2xl border-4 border-neutral-800 p-4 " style={{ fontSize: '70px' }}/>
              <SiPostgresql className="rounded-2xl border-4 border-neutral-800 p-4 " style={{ fontSize: '70px' }}/>
              <SiSqlite className="rounded-2xl border-4 border-neutral-800 p-4 " style={{ fontSize: '70px' }}/>
              <span className="rounded-2xl border-4 border-neutral-800 p-4 " style={{ fontSize: '20px' }}>SOQL</span>
              <span className="rounded-2xl border-4 border-neutral-800 p-4 " style={{ fontSize: '20px' }}>SOSL</span>
              <span className="rounded-2xl border-4 border-neutral-800 p-4 " style={{ fontSize: '20px' }}>Bash</span>
            </div>
          </div>
          <div className="text-center">
            <h2 className="text-xl font-bold">Libraries & Frameworks</h2>
            <div className="flex justify-center gap-4 m-8">
                <SiSpring className="rounded-2xl border-4 border-neutral-800 p-4 " style={{ fontSize: '70px' }}/>
                <SiDjango className="rounded-2xl border-4 border-neutral-800 p-4 " style={{ fontSize: '70px' }}/>
                <SiTensorflow className="rounded-2xl border-4 border-neutral-800 p-4 " style={{ fontSize: '70px' }}/>
                <SiPytorch className="rounded-2xl border-4 border-neutral-800 p-4 " style={{ fontSize: '70px' }}/>
                <SiSalesforce className="rounded-2xl border-4 border-neutral-800 p-4 " style={{ fontSize: '70px' }}/>
                <span className="rounded-2xl border-4 border-neutral-800 p-4 " style={{ fontSize: '20px' }}>WSO2</span>
                <SiReact className="rounded-2xl border-4 border-neutral-800 p-4 " style={{ fontSize: '70px' }}/>
            </div>
          </div>
          <div className="text-center">
            <h2 className="text-xl font-bold">Tools & Technologies</h2>
            <div className="flex justify-center gap-4 m-8">
                <SiGit className="rounded-2xl border-4 border-neutral-800 p-4 " style={{ fontSize: '70px' }}/>
                <SiLinux className="rounded-2xl border-4 border-neutral-800 p-4 " style={{ fontSize: '70px' }}/>
                <span className="rounded-2xl border-4 border-neutral-800 p-4 " style={{ fontSize: '20px' }}>AWS</span>
                <SiDocker className="rounded-2xl border-4 border-neutral-800 p-4 " style={{ fontSize: '70px' }}/>
                <SiRedis className="rounded-2xl border-4 border-neutral-800 p-4 " style={{ fontSize: '70px' }}/>
                <SiLinux className="rounded-2xl border-4 border-neutral-800 p-4 " style={{ fontSize: '70px' }}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TechStack;
