import { useParams } from "react-router-dom";
import Header from "../layout/Header";
import Footer from "../layout/Footer";

// dummy image (replace with real ones later)
import heroImg from "../../assets/images/article-detail-hero.jpg";
import related1 from "../../assets/images/article-1.jpg";
import related2 from "../../assets/images/article-2.jpg";
// import related3 from "./../assets/images/article-3.jpg";

const ArticleDetail = () => {
  const { id } = useParams();

  return (
    <>
      <Header />

      {/* ===== Article Header ===== */}
      <section className="max-w-5xl mx-auto px-6 pt-20 text-center">
        <h1 className="text-3xl md:text-4xl font-semibold leading-snug">
          Bedroom Design is the Most Personal Reflection of the Owner, Really?
        </h1>

        <p className="text-gray-400 text-sm mt-4">
          By <span className="font-medium text-gray-600">Jenny Agnes</span> •
          Tuesday, 17 May 2022
        </p>
      </section>

      {/* ===== Hero Image ===== */}
      <section className="max-w-6xl mx-auto px-6 mt-10">
        <img
          src={heroImg}
          alt="Article cover"
          className="w-full rounded-lg object-cover"
        />
      </section>

      {/* ===== Article Content ===== */}
      <section className="max-w-5xl mx-auto px-6 py-14">
        <div className="grid md:grid-cols-2 gap-10 text-gray-600 text-sm leading-7">
          <p>
            Commodo sodales at eget id dignissim amet consectetur adipiscing
            elit. At cursus magna luctus tortor scelerisque eu. Sed nunc
            faucibus vitae gravida varius.
          </p>

          <p>
            Faucibus facilisi morbi pharetra quis sed. Vitae suspendisse
            facilisis tincidunt felis a parturient aenean. Ac maecenas ultricies
            felis risus scelerisque.
          </p>
        </div>

        <div className="mt-10 text-gray-600 text-sm leading-7 space-y-6">
          <p>
            Nisl quam mi est et. Lectus sed imperdiet non vestibulum volutpat
            tellus odio aliquam. Eu rutrum tincidunt risus sagittis.
          </p>

          <p>
            Ornare tristique neque ut aliquet. Pharetra elementum pharetra
            ultrices sit. Eget nisi quisque sapien lectus neque.
          </p>
        </div>
      </section>

      {/* ===== Section Image ===== */}
      <section className="max-w-6xl mx-auto px-6">
        <img
          src={related1}
          alt="Bedroom collection"
          className="w-full rounded-lg"
        />
      </section>

      {/* ===== Collection Section ===== */}
      <section className="max-w-5xl mx-auto px-6 py-14">
        <h3 className="font-semibold text-lg mb-4">Bedroom Collection</h3>
        <p className="text-gray-600 text-sm leading-7">
          Nisi quam mi est et. Lectus sed imperdiet non vestibulum volutpat
          tellus odio aliquam. Eu rutrum tincidunt risus sagittis.
        </p>
      </section>

      {/* ===== Similar Topics ===== */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h3 className="text-xl font-semibold mb-8 text-center">
          Maybe you’re interested
        </h3>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[related1, related2, related3].map((img, i) => (
            <div key={i}>
              <img src={img} alt="related" className="rounded-lg mb-4" />
              <p className="text-xs text-gray-400">Tips and Trick</p>
              <h4 className="font-semibold text-sm mt-1">
                Create a non-monotonous and dynamic...
              </h4>
            </div>
          ))}
        </div>
      </section>

      {/* ===== Newsletter CTA ===== */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex items-center justify-between">
          <h3 className="text-2xl font-semibold">Subscribe our newsletter</h3>
          <button className="bg-emerald-700 text-white px-5 py-2 rounded">
            Let’s Talk →
          </button>
        </div>
        <hr className="mt-6" />
      </section>

      <Footer />
    </>
  );
};

export default ArticleDetail;
