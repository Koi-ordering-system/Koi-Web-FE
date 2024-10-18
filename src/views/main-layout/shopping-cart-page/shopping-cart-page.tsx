import './shopping-cart-page.css';
import { useEffect, useState } from 'react';

import koi_img from '../../../assets/images/fish/koi-shopping.png';
import male from '../../../assets/images/fish/male.png';
import female from '../../../assets/images/fish/female.png';
import trash from '../../../assets/images/fish/trash-can.png';
import { useNavigate } from 'react-router-dom';
// import { useCarts } from '@/domains/stores/hooks/carts/use-carts';

// Khai báo kiểu dữ liệu cho từng mục sản phẩm
interface FishItem {
    id: number;
    code: string;
    name: string;
    size: string;
    type: string;
    genderImg: string;
    color: string[];
    price: number;
    img: string;
}

const ShoppingCart = () => {
    const navigator = useNavigate()
    // Danh sách các sản phẩm
    const fishItems: FishItem[] = [
        { id: 1, code: 'KGR30999', name: 'Ginrin Kohaku', size: '10-13 cm', type: 'Hiranshin, Marudo, Ogata', genderImg: male, color: ['red', 'white'], price: 36000000, img: koi_img },
        { id: 2, code: 'KGR31001', name: 'Tancho Sanke', size: '14-16 cm', type: 'Dainichi, Sakai', genderImg: female, color: ['white', 'black', 'red'], price: 45000000, img: koi_img },
        { id: 3, code: 'KGR31002', name: 'Showa Sanshoku', size: '12-15 cm', type: 'Marudo, Ogata', genderImg: male, color: ['black', 'red', 'white'], price: 37000000, img: koi_img },
        { id: 4, code: 'KGR31003', name: 'Shusui', size: '10-13 cm', type: 'Hiranshin, Dainichi', genderImg: female, color: ['blue', 'white'], price: 34000000, img: koi_img },
    ];



    // State để quản lý checkbox chọn tất cả và chọn từng item
    const [selectedItems, setSelectedItems] = useState<number[]>([]);
    const [selectAll, setSelectAll] = useState<boolean>(false);

    // Hàm tính tổng giá tiền từ các sản phẩm được chọn
    const calculateTotalPrice = (): number => {
        return selectedItems.reduce((total, itemId) => {
            const item = fishItems.find(item => item.id === itemId);
            return total + (item ? item.price : 0);
        }, 0);
    };

    // Hàm xử lý khi nhấn vào checkbox "Choose all"
    const handleSelectAll = (): void => {
        if (!selectAll) {
            const allItemIds = fishItems.map(item => item.id);
            setSelectedItems(allItemIds);
        } else {
            setSelectedItems([]);
        }
        setSelectAll(!selectAll);
    };

    // Hàm xử lý khi chọn từng item
    const handleSelectItem = (id: number): void => {
        if (selectedItems.includes(id)) {
            const updatedItems = selectedItems.filter(itemId => itemId !== id);
            setSelectedItems(updatedItems);
        } else {
            const updatedItems = [...selectedItems, id];
            setSelectedItems(updatedItems);
        }
    };

    // Sử dụng useEffect để kiểm tra nếu tất cả các mục đều được chọn hoặc không
    useEffect(() => {
        if (selectedItems.length === fishItems.length) {
            setSelectAll(true);
        } else {
            setSelectAll(false);
        }
    }, [selectedItems, fishItems.length]);



    return (
        <div className="container shopping-cart">
            <div className='title'>
                <p>Cart</p>
                <div></div>
            </div>

            <div className="fish-shopping-list">
                {fishItems.map((item) => (
                    <div className="fish-shopping-item" key={item.id}>
                        <div className="fish-shopping-item-checkbox">
                            <input
                                type="checkbox"
                                checked={selectedItems.includes(item.id)}
                                onChange={() => handleSelectItem(item.id)}
                            />
                        </div>
                        <div className="fish-shopping-item-img">
                            <img src={item.img} alt={item.name} />
                        </div>
                        <div className="fish-shopping-item-content">
                            <p className='code'>{item.code}</p>
                            <p className='name'>{item.name}</p>
                            <p className='info'><strong>Size: </strong>{item.size}</p>
                            <p className='info'><strong>Type: </strong>{item.type}</p>
                            <div className='gender'>
                                <p className='info'><strong>Gender: </strong></p>
                                <img src={item.genderImg} alt="Gender" />
                            </div>
                            <div className='color'>
                                <p className='info'><strong>Color: </strong></p>
                                {item.color.map((color, index) => (
                                    <div key={index} className={`color-item ${color}`}></div>
                                ))}
                            </div>

                            <button className='delete-btn'>
                                <img className='trash-img' src={trash} alt="Trash" />
                            </button>

                            <p className='price'>{item.price.toLocaleString()} VND</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="total-price">
                <div className="left">
                    <input
                        type="checkbox"
                        checked={selectAll}
                        onChange={handleSelectAll}
                    />
                    <p>Choose all</p>
                </div>
                <div className="middle">
                    <p>Total: <strong>{calculateTotalPrice().toLocaleString()} VND</strong></p>
                </div>
                <div className="right">
                    <button onClick={() => navigator('/checkout')}>Checkout</button>
                </div>
            </div>
        </div>
    );
};

export default ShoppingCart;
