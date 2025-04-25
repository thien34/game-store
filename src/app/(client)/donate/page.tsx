import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Check, Heart } from 'lucide-react'

export default function DonatePage() {
  return (
    <div className='bg-background min-h-screen'>
      {/* Hero Section */}
      <section className='relative py-20 text-center'>
        <div className='from-primary/10 to-background absolute inset-0 bg-gradient-to-b' />
        <div className='content-wrapper-max relative z-10'>
          <h1 className='mb-4 text-5xl font-bold'>Hỗ Trợ Chúng Tôi</h1>
          <p className='text-muted-foreground mx-auto mb-8 max-w-2xl text-lg'>
            Cùng chung tay xây dựng cộng đồng game lớn mạnh. Mọi đóng góp của bạn đều có ý nghĩa!
          </p>
          <Button
            size='lg'
            className='gap-2'
          >
            <Heart className='h-5 w-5' />
            Quyên góp ngay
          </Button>
        </div>
      </section>

      {/* Donation Tiers */}
      <section className='py-16'>
        <div className='content-wrapper-max'>
          <h2 className='mb-12 text-center text-3xl font-bold'>Gói Quyên Góp</h2>
          <div className='grid gap-6 md:grid-cols-3'>
            <Card className='relative flex h-full flex-col overflow-hidden'>
              <div className='bg-primary text-primary-foreground absolute top-0 right-0 rounded-bl-lg px-4 py-1 text-sm font-medium'>
                Phổ biến
              </div>
              <CardHeader>
                <CardTitle>Người Ủng Hộ</CardTitle>
                <CardDescription>Gói cơ bản cho người mới bắt đầu</CardDescription>
                <div className='mt-4'>
                  <span className='text-3xl font-bold'>50.000đ</span>
                  <span className='text-muted-foreground'>/tháng</span>
                </div>
              </CardHeader>
              <CardContent className='flex-1'>
                <ul className='space-y-2'>
                  <li className='flex items-center gap-2'>
                    <Check className='text-primary h-4 w-4' />
                    <span>Badge người ủng hộ</span>
                  </li>
                  <li className='flex items-center gap-2'>
                    <Check className='text-primary h-4 w-4' />
                    <span>Quyền truy cập sớm</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className='w-full'>Chọn gói</Button>
              </CardFooter>
            </Card>

            <Card className='border-primary relative flex h-full flex-col'>
              <div className='bg-primary text-primary-foreground absolute top-0 right-0 rounded-bl-lg px-4 py-1 text-sm font-medium'>
                Được yêu thích
              </div>
              <CardHeader>
                <CardTitle>Người Hâm Mộ</CardTitle>
                <CardDescription>Gói phổ biến nhất</CardDescription>
                <div className='mt-4'>
                  <span className='text-3xl font-bold'>100.000đ</span>
                  <span className='text-muted-foreground'>/tháng</span>
                </div>
              </CardHeader>
              <CardContent className='flex-1'>
                <ul className='space-y-2'>
                  <li className='flex items-center gap-2'>
                    <Check className='text-primary h-4 w-4' />
                    <span>Badge người hâm mộ</span>
                  </li>
                  <li className='flex items-center gap-2'>
                    <Check className='text-primary h-4 w-4' />
                    <span>Quyền truy cập sớm</span>
                  </li>
                  <li className='flex items-center gap-2'>
                    <Check className='text-primary h-4 w-4' />
                    <span>Ưu đãi đặc biệt</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className='w-full'>Chọn gói</Button>
              </CardFooter>
            </Card>

            <Card className='relative flex h-full flex-col overflow-hidden'>
              <div className='bg-primary text-primary-foreground absolute top-0 right-0 rounded-bl-lg px-4 py-1 text-sm font-medium'>
                Cao cấp
              </div>
              <CardHeader>
                <CardTitle>Nhà Tài Trợ</CardTitle>
                <CardDescription>Gói cao cấp với nhiều đặc quyền</CardDescription>
                <div className='mt-4'>
                  <span className='text-3xl font-bold'>200.000đ</span>
                  <span className='text-muted-foreground'>/tháng</span>
                </div>
              </CardHeader>
              <CardContent className='flex-1'>
                <ul className='space-y-2'>
                  <li className='flex items-center gap-2'>
                    <Check className='text-primary h-4 w-4' />
                    <span>Badge nhà tài trợ</span>
                  </li>
                  <li className='flex items-center gap-2'>
                    <Check className='text-primary h-4 w-4' />
                    <span>Quyền truy cập sớm</span>
                  </li>
                  <li className='flex items-center gap-2'>
                    <Check className='text-primary h-4 w-4' />
                    <span>Ưu đãi đặc biệt</span>
                  </li>
                  <li className='flex items-center gap-2'>
                    <Check className='text-primary h-4 w-4' />
                    <span>Hỗ trợ ưu tiên</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className='w-full'>Chọn gói</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Payment Methods */}
      <section className='bg-muted/50 py-16'>
        <div className='content-wrapper-max'>
          <h2 className='mb-12 text-center text-3xl font-bold'>Phương Thức Thanh Toán</h2>
          <Tabs
            defaultValue='monthly'
            className='mx-auto max-w-2xl'
          >
            <TabsList className='grid w-full grid-cols-2'>
              <TabsTrigger value='monthly'>Thanh toán hàng tháng</TabsTrigger>
              <TabsTrigger value='one-time'>Thanh toán một lần</TabsTrigger>
            </TabsList>
            <TabsContent
              value='monthly'
              className='mt-6'
            >
              <Card>
                <CardHeader>
                  <CardTitle>Thanh toán hàng tháng</CardTitle>
                  <CardDescription>Chọn số tiền bạn muốn quyên góp hàng tháng</CardDescription>
                </CardHeader>
                <CardContent>
                  <RadioGroup
                    defaultValue='50000'
                    className='grid gap-4'
                  >
                    <div className='flex items-center space-x-2'>
                      <RadioGroupItem
                        value='50000'
                        id='50000'
                      />
                      <Label htmlFor='50000'>50.000đ/tháng</Label>
                    </div>
                    <div className='flex items-center space-x-2'>
                      <RadioGroupItem
                        value='100000'
                        id='100000'
                      />
                      <Label htmlFor='100000'>100.000đ/tháng</Label>
                    </div>
                    <div className='flex items-center space-x-2'>
                      <RadioGroupItem
                        value='200000'
                        id='200000'
                      />
                      <Label htmlFor='200000'>200.000đ/tháng</Label>
                    </div>
                    <div className='flex items-center space-x-2'>
                      <RadioGroupItem
                        value='custom'
                        id='custom'
                      />
                      <Label htmlFor='custom'>Số tiền khác</Label>
                    </div>
                  </RadioGroup>
                  <div className='mt-4'>
                    <Input
                      type='number'
                      placeholder='Nhập số tiền'
                    />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className='w-full'>Tiếp tục thanh toán</Button>
                </CardFooter>
              </Card>
            </TabsContent>
            <TabsContent
              value='one-time'
              className='mt-6'
            >
              <Card>
                <CardHeader>
                  <CardTitle>Thanh toán một lần</CardTitle>
                  <CardDescription>Chọn số tiền bạn muốn quyên góp</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className='grid gap-4'>
                    <Input
                      type='number'
                      placeholder='Nhập số tiền'
                    />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className='w-full'>Tiếp tục thanh toán</Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* FAQ Section */}
      <section className='py-16'>
        <div className='content-wrapper-max'>
          <h2 className='mb-12 text-center text-3xl font-bold'>Câu Hỏi Thường Gặp</h2>
          <div className='mx-auto max-w-3xl space-y-6'>
            <Card>
              <CardHeader>
                <CardTitle>Tôi có thể hủy đăng ký bất cứ lúc nào không?</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Có, bạn có thể hủy đăng ký bất cứ lúc nào. Việc hủy đăng ký sẽ có hiệu lực vào cuối chu kỳ thanh toán
                  hiện tại.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Làm thế nào để thay đổi phương thức thanh toán?</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Bạn có thể thay đổi phương thức thanh toán trong phần cài đặt tài khoản của mình.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Tôi có nhận được hóa đơn không?</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Có, chúng tôi sẽ gửi hóa đơn qua email sau mỗi lần thanh toán thành công.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className='bg-muted/50 py-16'>
        <div className='content-wrapper-max'>
          <h2 className='mb-12 text-center text-3xl font-bold'>Lời Cảm Ơn</h2>
          <div className='grid gap-6 md:grid-cols-3'>
            <Card>
              <CardContent className='pt-6'>
                <div className='flex items-center gap-4'>
                  <div className='bg-primary/20 h-12 w-12 rounded-full' />
                  <div>
                    <p className='font-medium'>Nguyễn Văn A</p>
                    <p className='text-muted-foreground text-sm'>Người ủng hộ từ 2023</p>
                  </div>
                </div>
                <p className='text-muted-foreground mt-4'>
                  &quot;Tôi rất vui khi được góp phần vào sự phát triển của cộng đồng game. Cảm ơn đội ngũ đã tạo ra một
                  nền tảng tuyệt vời!&quot;
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className='pt-6'>
                <div className='flex items-center gap-4'>
                  <div className='bg-primary/20 h-12 w-12 rounded-full' />
                  <div>
                    <p className='font-medium'>Trần Thị B</p>
                    <p className='text-muted-foreground text-sm'>Người hâm mộ từ 2022</p>
                  </div>
                </div>
                <p className='text-muted-foreground mt-4'>
                  &quot;Các ưu đãi dành cho người ủng hộ thực sự rất hấp dẫn. Tôi rất hài lòng với dịch vụ!&quot;
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className='pt-6'>
                <div className='flex items-center gap-4'>
                  <div className='bg-primary/20 h-12 w-12 rounded-full' />
                  <div>
                    <p className='font-medium'>Lê Văn C</p>
                    <p className='text-muted-foreground text-sm'>Nhà tài trợ từ 2021</p>
                  </div>
                </div>
                <p className='text-muted-foreground mt-4'>
                  &quot;Hỗ trợ từ đội ngũ rất nhiệt tình và chuyên nghiệp. Tôi sẽ tiếp tục ủng hộ trong thời gian
                  tới!&quot;
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
