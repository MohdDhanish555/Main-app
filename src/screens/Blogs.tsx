import InputBar from "../components/InputBar";
import "./css/Blogs.css";

const Blogs = ({ value, setValue, label }: any) => {
  return (
    <div className="blogs-container">
      <h1> BLOGS PAGE!</h1>
      <InputBar value={value} setValue={setValue} label={label} />

      <p>
        <span>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa
          doloremque nemo nostrum <b>nisi beatae?</b> Ad deserunt neque iste.
          Voluptates non quo culpa maxime odit sed esse nulla labore incidunt
          expedita.
        </span>
        <span>
          Rem facere ad nisi aperiam <b>consectetur sed</b> consectetur sed, at
          quam inventore labore dolor non, aspernatur ratione voluptas mollitia.
          Facere modi blanditiis quos repudiandae perferendis quod sapiente
          reiciendis officiis? Perferendis?
        </span>
        <span>
          Cumque, dolor provident? Sint <b>incidunt architecto</b> dicta id,
          voluptate ea minus labore ducimus odit, commodi earum aliquid,
          distinctio similique tenetur. Quidem obcaecati blanditiis quibusdam
          placeat nesciunt nulla odio eos sunt.
        </span>
        <span>
          Perferendis facere voluptates nisi aliquid nam minus minima ipsum, eum
          soluta tenetur adipisci dolor laudantium voluptatum quia, provident
          dicta corporis! Nobis nisi recusandae ea aliquid numquam optio
          mollitia debitis impedit.
        </span>
        <span>
          Ad, officia nam. Dolor nesciunt magnam harum, totam sunt officia
          voluptatibus ratione voluptate! Exercitationem autem, magni neque
          nulla sit commodi cupiditate molestias dolores totam porro rem
          reprehenderit quibusdam repellat consequatur?
        </span>
        <span>
          Animi quod sit iste consectetur in dicta assumenda doloremque
          voluptate beatae, eius ad! Quia beatae, molestiae provident expedita
          et eaque suscipit quibusdam explicabo veniam. Sapiente qui earum
          dignissimos ad quasi.
        </span>
        <span>
          Hic exercitationem, nemo itaque, voluptatem vitae quos iure aspernatur
          maiores dicta, illum repudiandae quas! Iusto modi laudantium est ipsam
          illo? Velit placeat animi quaerat id nam quae fugiat sed quos.
        </span>
        <span>
          In, sapiente natus! Deserunt vitae possimus quae hic quas enim, nihil
          quis perferendis laudantium ducimus impedit commodi recusandae esse
          autem, aliquid nesciunt. Maiores aspernatur minima magni illum
          veritatis aliquam laborum.
        </span>
        <span>
          Aut, sit adipisci veniam aliasincidunt <b>architecto</b> quidem omnis
          voluptatem enim illo ipsum eum veritatis dolorem aliquid similique
          aliquam accusamus, est sunt at autem! Quas molestiae accusantium
          beatae ullam nulla magnam blanditiis.
        </span>
        <span>
          Unde enim nemo quas quasi, iure <b>laudantium</b> quibusdam repellat
          ea velit ipsa! Architecto dignissimos amet atque, nulla exercitationem
          esse minus ea aperiam quam quia, adipisci dolorum libero neque dolores
          laudantium!
        </span>
      </p>
      <p style={{ textAlign: "left", color: "rgba(215, 157, 50,0.4)" }}>
        YOUR TEXT GOES <b>HERE</b> :{" "}
        <span style={{ color: "#fff" }}> {value}</span>
      </p>
    </div>
  );
};

export default Blogs;
