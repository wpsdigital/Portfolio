import Link from "next/link";
import {
  RiFacebookLine,
  RiInstagramLine,
  RiLinkedinLine,
  RiGithubLine,
} from 'react-icons/ri'

const Socials = () => {
  return(
    <div className="flex items-center gap-x-5 text-lg">
      <Link href={''} className="hover:text-accent transition-all duration-300">
        <RiFacebookLine />
      </Link>
      <Link href={'https://instagram.com/bennbatuu/'} target="_blank" className="hover:text-accent transition-all duration-300">
        <RiInstagramLine />
      </Link>
      <Link href={'https://linkedin.com/in/bennbatuu/'} target="_blank" className="hover:text-accent transition-all duration-300">
        <RiLinkedinLine />
      </Link>
      <Link href={'https://github.com/benbatuu/'} target="_blank" className="hover:text-accent transition-all duration-300">
        <RiGithubLine />
      </Link>
    </div>
  );
};

export default Socials;
