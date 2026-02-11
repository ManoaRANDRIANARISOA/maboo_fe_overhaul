import { motion } from "framer-motion";
import { HoverableProduct } from "./hoverable-product";

interface FeaturedProductsProps {
    products: Product[];
}

export function FeaturedProducts({ products }: FeaturedProductsProps) {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: { delay: 0.3, duration: 0.5 } }}
            viewport={{ once: true }}
            className="container mx-auto px-4 py-16 mb-8"
        >
            <div className="text-center max-w-3xl mx-auto mb-12">
                <h5 className="text-4xl font-bold mb-4 text-gray-900">
                    Nos produits, les Vôtres
                </h5>
                <p className="text-gray-600 text-lg leading-relaxed">
                    Avec un soin méticuleux, nous avons sélectionné spécialement pour vous ces produits exceptionnels.
                    Chaque article a été choisi avec une attention particulière pour répondre à vos besoins et à vos goûts uniques
                </p>
            </div>

            <div className="flex flex-wrap justify-center sm:justify-around gap-6">
                {products && products.length > 0 ? (
                    products.map((product) => (
                        <HoverableProduct key={product.id} product={product} />
                    ))
                ) : (
                    <div className="w-full text-center text-gray-400">Loading products...</div>
                )}
            </div>
        </motion.section>
    );
}