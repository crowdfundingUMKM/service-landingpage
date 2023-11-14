import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router';

import CampaignDetailsLayout from '@/pages/list-campaign/campaign-detail/layout.jsx'
import SliderLayout from '@/components/SliderLayout.jsx'
import setupTabs from '@/components/utils/tabs';
import "@/styles/detail.module.css"

import React, { useEffect, useState  } from 'react';
export default function CampaignDetails({}) {
    const router = useRouter();
    useEffect(() => {
        setupTabs();
      }, []);

      const [inputValue, setInputValue] = useState(50000); // Nilai default

    // Fungsi untuk memformat rupiah
    const formatRupiah = (angka, prefix) => {
        let number_string = angka.toString(),
            sisa = number_string.length % 3,
            rupiah = number_string.substr(0, sisa),
            ribuan = number_string.substr(sisa).match(/\d{3}/g);

        if (ribuan) {
        let separator = sisa ? '.' : '';
        rupiah += separator + ribuan.join('.');
        }

        return prefix ? 'Rp. ' + rupiah : rupiah;
    };

    // Fungsi yang dipanggil saat nilai input berubah
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };
    
    return (
        <>
        <CampaignDetailsLayout>
            <main>
            <section className="section-page">
                <div className="section">
                    <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                        <div className="mb-5">
                            <h2 className="mb-4 text-center" style={{ lineHeight: "1.5" }}>
                            Detail UMKM
                            </h2>
                            <span>
                            15 March 2020 <span className="mx-2">/</span>{" "}
                            </span>
                            <p className="list-inline-item">
                            Category : Pertanian
                            </p>
                        </div>
                        <div className="mb-5 text-center">
                            <div className="post-slider rounded overflow-hidden">
                            <SliderLayout >
                            <Image
                                loading="lazy"
                                decoding="async"
                                src="/assets/images/blog/post-4.jpg"
                                alt="Post Thumbnail"
                                width={1000}
                                height={300}
                            />
                            <Image
                                loading="lazy"
                                decoding="async"
                                src="/assets/images/blog/post-5.jpg"
                                alt="Post Thumbnail"
                                width={1000}
                                height={300}
                            />
                            <Image
                                loading="lazy"
                                decoding="async"
                                src="/assets/images/blog/post-3.jpg"
                                alt="Post Thumbnail"
                                width={1000}
                                height={300}
                            />
                            </SliderLayout>
                            </div>
                        </div>
                        <h6>Terkumpul</h6>
                        <div className="progress">
                            <div
                            className="progress-bar progress-bar-striped progress-bar-animated bg-success"
                            role="progressbar"
                            aria-valuenow={75}
                            aria-valuemin={0}
                            aria-valuemax={100}
                            style={{ width: "75%" }}
                            >
                            %75
                            </div>
                        </div>
                        <div className="row d-flex justify-content-between pt-2">
                            <div className="col-7">
                            <h4>Rp.16.000.000 dari Rp.700.000</h4>
                            </div>
                            <div className="col-3 col-lg-1">
                            <h4>%75</h4>
                            </div>
                        </div>
                        <div className="row">
                            {/* About campaign */}
                            <div className="col-7 col-md-6 order-1 order-md-0">
                            <div className="content">
                                <h2 id="title_campaign">Pertanian Organik {router.query.campaign_id}</h2>
                                <p id="description">
                                Dukunglah usaha pertanian organik kami untuk memberikan
                                makanan sehat dan berkualitas kepada masyarakat.
                                </p>
                                <hr />
                                {/* Informasi */}
                                <h4 id="tab">Informasi UMKM</h4>
                                <div className="code-tabs">
                                <ul className="nav nav-tabs" />
                                <div className="tab-content">
                                    {/* Informasi Tab */}
                                    <div className="tab-pane" title="Informasi">
                                    <p id="describe_detail">
                                        <strong>Detail Penawaran</strong>
                                    </p>
                                    <div className="info-campaign text-black">
                                        <p>Total Pendanaan: Rp.16.000.000,00</p>
                                        <p>Minimal Investasi: Rp.100.000</p>
                                        <p>Suku Bunga (per tahun): 15%</p>
                                        <p>Masa Tenor: 12 Bulan</p>
                                        <p>Pengembalian Dana: Saat Jatuh Tempo</p>
                                        <p>Deadline Kampaye: 12 Agustus 2023</p>
                                    </div>
                                    <a className="btn btn-primary " href="#" role="button">
                                        Proposal Bisnis
                                    </a>
                                    </div>
                                    {/* End Informasi Tab */}
                                    {/* Benefit tab */}
                                    <div className="tab-pane" title="Benefit">
                                    <p id="describe_benefit">
                                        <strong>Benefit</strong>
                                    </p>
                                    <ul className="text-black">
                                        <li>Ini benefit yang didaptkan</li>
                                        <li>Ini benefit yang didaptkan</li>
                                        <li>Ini benefit yang didaptkan</li>
                                        <li>Ini benefit yang didaptkan</li>
                                    </ul>
                                    </div>
                                    {/* End Benefit tab */}
                                    {/* Tentnag penerbit tab */}
                                    <div className="tab-pane" title="Tentang Penerbit">
                                    <p id="describe_publisher">
                                        <strong>Tentang Penerbit</strong>
                                    </p>
                                    <div className="info-publisher">
                                        <div className="name-user-campaign">
                                        <div className="container">
                                            <div className="row">
                                            <div className="col-4">
                                                <Image
                                                loading="lazy"
                                                decoding="async"
                                                src="/assets/images/blog/post-4.jpg"
                                                alt="Post Thumbnail"
                                                width={1000}
                                                height={300}
                                                />
                                            </div>
                                            <div className="col">
                                                <h3>Pak agus</h3>
                                            </div>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="describe_publisher">
                                        <strong>Deskripsi Penerbit</strong>
                                        <p className="text-black">
                                        Ini data tentang penerbit UMKM yang membuka UMKMIni
                                        data tentang penerbit UMKM yang membuka UMKMIni data
                                        tentang penerbit UMKM yang membuka UMKMIni data
                                        tentang penerbit UMKM yang membuka UMKM
                                        </p>
                                    </div>
                                    <div className="link-penerbit">
                                    <Link className="btn btn-primary m-2" href="https://localhost:1212/data" role="button">
                                        Link
                                    </Link>
                                    </div>
                                    </div>
                                    {/* End Tentang penerbit tab */}
                                </div>
                                </div>
                                {/* End Informasi  */}
                                <hr />
                                {/* Reviewer */}
                                <h4 id="tab">Reviewer Comment</h4>
                                <div className="code-tabs">
                                <ul className="nav nav-tabs" />
                                <div className="tab-content">
                                    <div className="tab-pane" title="Reviewer 1">
                                        <p id="name_reviewer">
                                            <strong>Nama Reviewer</strong>
                                        </p>
                                        <p id="describe_review">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                            Fuga voluptatibus dignissimos quam laudantium ex.
                                        </p>
                                        <div id="rating_review" className="row">
                                            <p>Review UMKM: ⭐⭐⭐⭐4/5 </p>
                                        </div>
                                        <a className="btn btn-primary " href="#" role="button">
                                            Kunjungi Profile Reviewer
                                        </a>
                                    </div>
                                    <div className="tab-pane" title="Reviewer 2">
                                    <p id="name_reviewer">
                                        <strong>Nama Reviewer 2</strong>
                                    </p>
                                    <p id="describe_review">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Fuga voluptatibus dignissimos quam laudantium ex.
                                    </p>
                                    <div id="rating_review" className="row">
                                        <p>Review UMKM: ⭐⭐⭐⭐⭐5/5 </p>
                                    </div>
                                    <a className="btn btn-primary " href="#" role="button">
                                        Kunjungi Profile Reviewer
                                    </a>
                                    </div>
                                    <div className="tab-pane" title="Reviewer 3">
                                    <p id="name_reviewer">
                                        <strong>Nama Reviewer 3</strong>
                                    </p>
                                    <p id="describe_review">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Fuga voluptatibus dignissimos quam laudantium ex.
                                    </p>
                                    <div id="rating_review" className="row">
                                        <p>Review UMKM: ⭐⭐⭐3/5 </p>
                                    </div>
                                    <a className="btn btn-primary " href="#" role="button">
                                        Kunjungi Profile Reviewer
                                    </a>
                                    </div>
                                </div>
                                </div>
                                {/* End Reviewer */}
                                <hr />
                                {/* Link UMKM Terkait*/}
                                <h5 id="link">Link Bisnis Terkait</h5>
                                <ul className="link-umkm">
                                <li>
                                    <p>
                                    <a href="https://www.google.com">
                                        I’m an inline-style link
                                    </a>
                                    </p>
                                </li>
                                <li>
                                    <p>
                                    <a
                                        href="https://www.google.com"
                                        title="Google's Homepage"
                                    >
                                        I’m an inline-style link with title
                                    </a>
                                    </p>
                                </li>
                                <li>
                                    <p>
                                    <a href="https://www.themefisher.com">
                                        I’m a reference-style link
                                    </a>
                                    </p>
                                </li>
                                </ul>
                                <hr />
                                <h5 id="image">Gallery UMKM</h5>
                                <p>
                                <Image
                                    loading="lazy"
                                    decoding="async"
                                    className="w-100 d-block mb-4 rounded-3"
                                    src="/assets/images/blog/post-4.jpg"
                                    alt="placeholder image"
                                    width={1000}
                                    height={300}
                                />
                                <Image
                                    loading="lazy"
                                    decoding="async"
                                    className="w-100 d-block mb-4 rounded-3"
                                    src="/assets/images/blog/post-3.jpg"
                                    alt="placeholder image"
                                    width={1000}
                                    height={300}
                                />
                                <Image
                                    loading="lazy"
                                    decoding="async"
                                    className="w-100 d-block mb-4 rounded-3"
                                    src="/assets/images/blog/post-1.jpg"
                                    alt="placeholder image"
                                    width={1000}
                                    height={300}
                                />
                                </p>
                                <hr />
                            </div>
                            </div>
                            {/* About campaign end*/}
                            {/* Payment */}
                            <div className="col col-md-6 order-0 order-md-1">
                            <div className="card-body payment m-5">
                                <div className="container">
                                <form>
                                    <h4 id="donate">Beri Modal Untuk UMKM</h4>
                                    <div className="mb-3">
                                    <label htmlFor="price_pay_umkm" className="form-label">
                                        Modalkan
                                    </label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        onChange={handleInputChange}
                                        id="price_pay_umkm"
                                        aria-describedby="price_pay_umkm"
                                        min={50000}
                                        defaultValue={50000}
                                        step={10000}
                                    />
                                    <div id="prices" className="form-text">
                                        Tentukan jumlah dana yang ingin dibantu
                                    </div>
                                    </div>
                                    <div className="mb-3">
                                    <p>Biaya yang akan dibayarkan:</p>
                                    </div>
                                    <h4 className="price_from_pay">{formatRupiah(inputValue, true)}</h4>
                                    <div className="mb-3">
                                        Harap login atau register terlebih dahulu untuk membayar
                                    </div>
                                    <div className="justify-content-center">
                                    <Link href={process.env.NEXT_PUBLIC_LOGIN_INVESTOR} className="btn btn-outline-primary ms-2 ms-lg-3 " target="_blank">
                                        Log In
                                    </Link>
                                    <Link href={process.env.NEXT_PUBLIC_REGISTER_INVESTOR} className="btn btn-outline-primary ms-2 ms-lg-3 " target="_blank">
                                    Sign Up
                                    </Link>
                                    </div>
                                </form>
                                </div>
                            </div>
                            </div>
                            {/* Payment end */}
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </section>

            </main>
            
        </CampaignDetailsLayout>
        </>
    )
}