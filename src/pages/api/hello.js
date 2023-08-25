
import prisma from "../../until/prisma"
export default async function handler(req, res) {
    try {
        const results = await prisma.wine_cet4_word.findFirst({
         
        });
        return res.status(200).json(results);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}
