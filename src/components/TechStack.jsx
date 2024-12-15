import { FaJava } from "react-icons/fa";
import { SiC, SiCplusplus, SiPython, SiMysql, SiPostgresql, SiSqlite, SiSpring, SiDjango, SiTensorflow, SiPytorch, SiSalesforce, SiReact, SiGit, SiLinux, SiDocker, SiRedis, SiRabbitmq, SiApachetomcat, SiApachekafka, SiPostman, SiMongodb, SiKeras } from "react-icons/si";

const TechStack = () => {
  return (
    <div className="border-b border-neutral-800 pb-5">
      <h1 className="my-10 pb-5 text-center text-4xl">Technology Stack</h1>
      <div className="flex flex-col items-center">
        <div className="flex flex-col gap-4">
          <div className="text-center">
            <h2 className="text-xl font-bold">Languages & Scripting</h2>
            <div className="flex justify-center gap-4 m-8">
              <div className="text-center">
                <SiC className="rounded-2xl border-4 border-neutral-800 p-4" style={{ fontSize: '70px', color: '#00599C' }} />
                <span className="text-sm mt-2" style={{ color: '#00599C' }}>C</span>
              </div>
              <div className="text-center">
                <SiCplusplus className="rounded-2xl border-4 border-neutral-800 p-4" style={{ fontSize: '70px', color: '#004482' }} />
                <span className="text-sm mt-2" style={{ color: '#004482' }}>C++</span>
              </div>
              <div className="text-center">
                <FaJava className="rounded-2xl border-4 border-neutral-800 p-4" style={{ fontSize: '70px', color: '#007396' }} />
                <span className="text-sm mt-2" style={{ color: '#007396' }}>Java</span>
              </div>
              <div className="text-center">
                <SiPython className="rounded-2xl border-4 border-neutral-800 p-4" style={{ fontSize: '70px', color: '#306998' }} />
                <span className="text-sm mt-2" style={{ color: '#306998' }}>Python</span>
              </div>
              
              <div className="text-center">
                <SiMysql className="rounded-2xl border-4 border-neutral-800 p-4" style={{ fontSize: '70px', color: '#4479A1' }} />
                <span className="text-sm mt-2" style={{ color: '#4479A1' }}>MySQL</span>
              </div>
              <div className="text-center">
                <SiPostgresql className="rounded-2xl border-4 border-neutral-800 p-4" style={{ fontSize: '70px', color: '#336791' }} />
                <span className="text-sm mt-2" style={{ color: '#336791' }}>PostgreSQL</span>
              </div>
              <div className="text-center">
                <SiSqlite className="rounded-2xl border-4 border-neutral-800 p-4" style={{ fontSize: '70px', color: '#003B57' }} />
                <span className="text-sm mt-2" style={{ color: '#003B57' }}>SQLite</span>
              </div>
             
              <div className="text-center">
                <SiMongodb className="rounded-2xl border-4 border-neutral-800 p-4" style={{ fontSize: '70px', color: '#003B57' }} />
                <span className="text-sm mt-2" style={{ color: '#003B57' }}>MongoDB</span>
              </div>
              <div className="text-center pt-5">
                <span className="rounded-2xl border-4 border-neutral-800 p-4" style={{ fontSize: '20px', color: '#0068A5' }}>Apex</span>
              </div>
              <div className="text-center pt-5">
                <span className="rounded-2xl border-4 border-neutral-800 p-4" style={{ fontSize: '20px', color: '#003D74' }}>SOQL</span>
              </div>
              <div className="text-center pt-5">
                <span className="rounded-2xl border-4 border-neutral-800 p-4" style={{ fontSize: '20px', color: '#003D74' }}>SOSL</span>
              </div>
              <div className="text-center pt-5">
                <span className="rounded-2xl border-4 border-neutral-800 p-4" style={{ fontSize: '20px', color: '#4EAA5E' }}>Bash</span>
              </div>
            </div>
          </div>
          <div className="text-center">
            <h2 className="text-xl font-bold">Libraries & Frameworks</h2>
            <div className="flex justify-center gap-4 m-8">
              <div className="text-center">
                <SiSpring className="rounded-2xl border-4 border-neutral-800 p-4" style={{ fontSize: '70px', color: '#6DB33F' }} />
                <span className="text-sm mt-2" style={{ color: '#6DB33F' }}>Spring</span>
              </div>
              <div className="text-center">
                <SiDjango className="rounded-2xl border-4 border-neutral-800 p-4" style={{ fontSize: '70px', color: '#092E20' }} />
                <span className="text-sm mt-2" style={{ color: '#092E20' }}>Django</span>
              </div>
              <div className="text-center">
                <SiTensorflow className="rounded-2xl border-4 border-neutral-800 p-4" style={{ fontSize: '70px', color: '#FF6F00' }} />
                <span className="text-sm mt-2" style={{ color: '#FF6F00' }}>TensorFlow</span>
              </div>
              <div className="text-center">
                <SiKeras className="rounded-2xl border-4 border-neutral-800 p-4" style={{ fontSize: '70px', color: '#EE4C2C' }} />
                <span className="text-sm mt-2" style={{ color: '#EE4C2C' }}>Keras</span>
              </div>
              <div className="text-center">
                <SiPytorch className="rounded-2xl border-4 border-neutral-800 p-4" style={{ fontSize: '70px', color: '#EE4C2C' }} />
                <span className="text-sm mt-2" style={{ color: '#EE4C2C' }}>PyTorch</span>
              </div>
              <div className="text-center">
                <SiSalesforce className="rounded-2xl border-4 border-neutral-800 p-4" style={{ fontSize: '70px', color: '#00A1E0' }} />
                <span className="text-sm mt-2" style={{ color: '#00A1E0' }}>Salesforce</span>
              </div>
              <div className="text-center pt-5">
                <span className="rounded-2xl border-4 border-neutral-800 p-4" style={{ fontSize: '20px', color: '#2F6B70' }}>WSO2</span>
              </div>
              <div className="text-center">
                <SiReact className="rounded-2xl border-4 border-neutral-800 p-4" style={{ fontSize: '70px', color: '#61DAFB' }} />
                <span className="text-sm mt-2" style={{ color: '#61DAFB' }}>React</span>
              </div>
            </div>
          </div>
          <div className="text-center">
            <h2 className="text-xl font-bold">Tools & Technologies</h2>
            <div className="flex justify-center gap-4 m-8">
              <div className="text-center">
                <SiGit className="rounded-2xl border-4 border-neutral-800 p-4" style={{ fontSize: '70px', color: '#F1502F' }} />
                <span className="text-sm mt-2" style={{ color: '#F1502F' }}>Git</span>
              </div>
              <div className="text-center">
                <SiLinux className="rounded-2xl border-4 border-neutral-800 p-4" style={{ fontSize: '70px', color: '#FCC624' }} />
                <span className="text-sm mt-2" style={{ color: '#FCC624' }}>Linux</span>
              </div>
              <div className="text-center pt-5">
                <span className="rounded-2xl border-4 border-neutral-800 p-4" style={{ fontSize: '20px', color: '#FF9900' }}>AWS</span>
              </div>
              <div className="text-center">
                <SiDocker className="rounded-2xl border-4 border-neutral-800 p-4" style={{ fontSize: '70px', color: '#2496ED' }} />
                <span className="text-sm mt-2" style={{ color: '#2496ED' }}>Docker</span>
              </div>
              <div className="text-center">
                <SiRedis className="rounded-2xl border-4 border-neutral-800 p-4" style={{ fontSize: '70px', color: '#DC382D' }} />
                <span className="text-sm mt-2" style={{ color: '#DC382D' }}>Redis</span>
              </div>
              <div className="text-center">
                <SiRabbitmq className="rounded-2xl border-4 border-neutral-800 p-4" style={{ fontSize: '70px', color: '#FCC624' }} />
                <span className="text-sm mt-2" style={{ color: '#FCC624' }}>RabbitMQ</span>
              </div>
              
              <div className="text-center">
                <SiApachekafka className="rounded-2xl border-4 border-neutral-800 p-4" style={{ fontSize: '70px', color: '#FCC624' }} />
                <span className="text-sm mt-2" style={{ color: '#FCC624' }}>Kafka</span>
              </div>
              <div className="text-center pt-5">
                <span className="rounded-2xl border-4 border-neutral-800 p-4" style={{ fontSize: '20px', color: '#2F6B70' }}>Web Servers</span>
              </div>
              <div className="text-center pt-5">
                <span className="rounded-2xl border-4 border-neutral-800 p-4" style={{ fontSize: '20px', color: '#2F6B70' }}>Web Clients</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TechStack;
