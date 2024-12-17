import { FaJava } from "react-icons/fa";
import wso2Icon from '../assets/wso2-logo.png';
import {
  SiC,
  SiCplusplus,
  SiPython,
  SiMysql,
  SiPostgresql,
  SiSqlite,
  SiSpring,
  SiDjango,
  SiTensorflow,
  SiPytorch,
  SiSalesforce,
  SiReact,
  SiGit,
  SiLinux,
  SiDocker,
  SiRedis,
  SiRabbitmq,
  SiApachetomcat,
  SiApachekafka,
  SiPostman,
  SiMongodb,
  SiKeras,
  SiNginx,
  SiNgrok,
  SiGnubash,
} from "react-icons/si";

const TechStack = () => {
  return (
    <div id="TechStack" className="bg-[#111111] border-b border-neutral-800 pb-12 pt-5">
      <h1 className="my-10 text-center text-4xl pb-5">Technology Stack</h1>
      <div className="flex flex-col items-center">
        <div className="flex flex-col gap-4">
          {/* Languages & Scripting Section */}
          <div className="text-center">
            <h2 className="text-xl font-bold text-neutral-400">Languages & Scripting</h2>
            <div className="flex justify-center gap-8 m-8">
              {[
                { Icon: SiC, name: 'C', color: '#00599C' },
                { Icon: SiCplusplus, name: 'C++', color: '#004482' },
                { Icon: FaJava, name: 'Java', color: '#F8B800' },
                { Icon: SiPython, name: 'Python', color: '#306998' },
                { Icon: SiMysql, name: 'MySQL', color: '#00618A' },
                { Icon: SiPostgresql, name: 'PostgreSQL', color: '#336791' },
                { Icon: SiSqlite, name: 'SQLite', color: '#003B57' },
                { Icon: SiMongodb, name: 'MongoDB', color: '#3FA037' },
                { Icon: SiGnubash, name: 'Bash', color: '#3FA037' },
              ].map(({ Icon, name, color }) => (
                <div className="text-center group" key={name}>
                  <Icon
                    className="rounded-2xl border-4 border-neutral-700 p-4 transition-transform transform group-hover:scale-110"
                    style={{ fontSize: "70px", color }}
                  />
                  <span className="text-sm mt-2 text-neutral-300 group-hover:text-neutral-100 transition-colors">{name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Libraries & Frameworks Section */}
          <div className="text-center">
            <h2 className="text-xl font-bold text-neutral-400">Libraries & Frameworks</h2>
            <div className="flex justify-center gap-8 m-8">
              {[
                { Icon: SiSpring, name: 'Spring', color: '#6DB33F' },
                { Icon: SiDjango, name: 'Django', color: '#092E20' },
                { Icon: SiTensorflow, name: 'TensorFlow', color: '#FF6F00' },
                { Icon: SiKeras, name: 'Keras', color: '#EE4C2C' },
                { Icon: SiPytorch, name: 'PyTorch', color: '#EE4C2C' },
                { Icon: SiSalesforce, name: 'Salesforce', color: '#00A1E0' },
                { Icon: SiReact, name: 'React', color: '#61DAFB' },
                { Icon: 'img', name: 'WSO2',color: '#000000' },
              ].map(({ Icon, name, color }) => (
                <div className="text-center group" key={name}>
                  {Icon === 'img' ? (
                    <img
                      src={wso2Icon}
                      alt={'WSO2'}
                      className="rounded-2xl border-4 border-neutral-700 p-4 transition-transform transform group-hover:scale-110"
                      style={{ width: "70px", height: "60px", objectFit: "contain" }}
                    />
                  ) : (
                    <Icon
                      className="rounded-2xl border-4 border-neutral-700 p-4 transition-transform transform group-hover:scale-110"
                      style={{ fontSize: "70px", color }}
                    />
                  )}
                  <span className="text-sm mt-2 text-neutral-300 group-hover:text-neutral-100 transition-colors">{name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tools & Technologies Section */}
          <div className="text-center">
            <h2 className="text-xl font-bold text-neutral-400">Tools & Technologies</h2>
            <div className="flex justify-center gap-8 m-8">
              {[
                { Icon: SiGit, name: 'Git', color: '#F1502F' },
                { Icon: SiLinux, name: 'Linux', color: '#FCC624' },
                { Icon: SiDocker, name: 'Docker', color: '#2496ED' },
                { Icon: SiRedis, name: 'Redis', color: '#DC382D' },
                { Icon: SiRabbitmq, name: 'RabbitMQ', color: '#FCC624' },
                { Icon: SiApachekafka, name: 'Kafka', color: '#F5A623' },
                { Icon: SiApachetomcat, name: 'Tomcat', color: '#F5A623' },
                { Icon: SiNginx, name: 'Nginx', color: '#F5A623' },
                { Icon: SiNgrok, name: 'Ngrok', color: '#F5A623' },
                { Icon: SiPostman, name: 'Postman', color: '#F5A623' },
              ].map(({ Icon, name, color }) => (
                <div className="text-center group" key={name}>
                  <Icon
                    className="rounded-2xl border-4 border-neutral-700 p-4 transition-transform transform group-hover:scale-110"
                    style={{ fontSize: "70px", color }}
                  />
                  <span className="text-sm mt-2 text-neutral-300 group-hover:text-neutral-100 transition-colors">{name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
